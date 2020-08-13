import React, { Fragment, useCallback, useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Formik, Field } from 'formik';

import {
  ageRanges,
  invertMask,
  categoryMask,
  tot,
  def,
  phy,
  wor,
  soc
} from '~utils/scoring';
import Layout from '~components/Layout';

export default function CalculatorPage() {
  const [results, setResults] = useState({});

  const onSubmit = useCallback(
    (values) => {
      const { age, answers } = values;

      let ageRange = 'early';

      if (age > ageRanges.middle.max) {
        ageRange = 'late';
      } else if (age > ageRanges.early.max) {
        ageRange = 'middle';
      }

      const answersSplit = answers.split('');
      const score = {
        p: 0,
        d: 0,
        w: 0,
        s: 0,
        t: 0
      };

      for (let i = 0; i < answersSplit.length; i++) {
        const category = categoryMask[i].toLowerCase();
        const affirmative = answersSplit[i] === '1';
        const inverted = invertMask[i] === '1';

        if (!(affirmative && inverted) && (affirmative || inverted)) {
          score[category]++;
        }
      }

      score.t = score.p + score.w + score.s;

      const ranks = {
        t: tot(ageRange, score.t),
        p: phy(ageRange, score.p),
        d: def(ageRange, score.d),
        w: wor(ageRange, score.w),
        s: soc(ageRange, score.s)
      };

      setResults({
        ageRange,
        score,
        ranks
      });
    },
    [setResults]
  );

  const validate = useCallback((values) => {
    const { age, answers, answersConfirm } = values;
    const errors = {};

    if (age < ageRanges.early.min) {
      errors.age = 'Patient is too young.';
    } else if (age > ageRanges.late.max) {
      errors.age = 'Patient is too old.';
    }

    if (answers !== answersConfirm) {
      errors.answersConfirm = 'Values do not match.';
    }

    if (answers.length !== invertMask.length) {
      errors.answers = 'Incorrect length.';
    } else if (/[^12]/.test(answers)) {
      errors.answers = 'Answers string must consist of only "1" or "2"';
    }

    return errors;
  }, []);

  return (
    <Layout>
      <Formik
        initialValues={{ age: 0, answers: '', answersConfirm: '' }}
        validate={validate}
        onSubmit={onSubmit}
      >
        {({ errors, touched, handleChange, handleSubmit, values }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Patient Age</Form.Label>
              <Field
                as={Form.Control}
                type="number"
                name="age"
                value={values.age}
                onChange={handleChange}
                isInvalid={Boolean(errors.age)}
              />
              {errors.age && touched.age && (
                <Form.Control.Feedback type="invalid">
                  {errors.age}
                </Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group>
              <Form.Label>Answers (1 = YES, 2 = NO)</Form.Label>
              <Field
                as={Form.Control}
                type="text"
                name="answers"
                value={values.answers}
                onChange={handleChange}
                isInvalid={Boolean(errors.answers)}
              />
              {errors.answers && touched.answers && (
                <Form.Control.Feedback type="invalid">
                  {errors.answers}
                </Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group>
              <Form.Label>Confirm Answers</Form.Label>
              <Field
                as={Form.Control}
                type="text"
                name="answersConfirm"
                value={values.answersConfirm}
                onChange={handleChange}
                isInvalid={Boolean(errors.answersConfirm)}
              />
              {errors.answersConfirm && touched.answersConfirm && (
                <Form.Control.Feedback type="invalid">
                  {errors.answersConfirm}
                </Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group>
              <Button type="submit">Submit</Button>
            </Form.Group>
          </Form>
        )}
      </Formik>
      {results.ageRange && (
        <Fragment>
          <Row>
            <Col>Age Range: {results.ageRange}</Col>
          </Row>
          <Row>
            <Col>DEF {results.score.d}</Col>
            <Col>TOT {results.score.t}</Col>
            <Col>PHY {results.score.p}</Col>
            <Col>WOR {results.score.w}</Col>
            <Col>SOC {results.score.s}</Col>
          </Row>
          <Row>
            <Col>
              <p>T-score {results.ranks.d?.t}</p>
              <p>Percentile {results.ranks.d?.p}</p>
            </Col>
            <Col>
              <p>T-score {results.ranks.t?.t}</p>
              <p>Percentile {results.ranks.t?.p}</p>
            </Col>
            <Col>
              <p>T-score {results.ranks.p?.t}</p>
              <p>Percentile {results.ranks.p?.p}</p>
            </Col>
            <Col>
              <p>T-score {results.ranks.w?.t}</p>
              <p>Percentile {results.ranks.w?.p}</p>
            </Col>
            <Col>
              <p>T-score {results.ranks.s?.t}</p>
              <p>Percentile {results.ranks.s?.p}</p>
            </Col>
          </Row>
        </Fragment>
      )}
    </Layout>
  );
}
