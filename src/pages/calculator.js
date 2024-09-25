import { Fragment, useCallback, useState } from 'react';
import { Form, Row, Col, Button, Table, Card } from 'react-bootstrap';
import { useFormik } from 'formik';

import Layout from 'components/Layout';
import {
  ageRanges,
  invertMask,
  categoryMask,
  inc,
  tot,
  def,
  phy,
  wor,
  soc
} from 'utils/scoring';

export function Head() {
  return (
    <Fragment>
      <title>Calculator</title>
    </Fragment>
  );
}

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

      const indexScore = inc(answers);

      setResults({
        ageRange,
        score,
        ranks,
        indexScore
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

  const { errors, touched, handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      age: 0,
      answers: '',
      answersConfirm: ''
    },
    validate,
    onSubmit
  });

  return (
    <Layout>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Patient Age</Form.Label>
          <Form.Control
            isInvalid={Boolean(errors.age)}
            name="age"
            onChange={handleChange}
            type="number"
            value={values.age}
          />
          {errors.age && touched.age && (
            <Form.Control.Feedback type="invalid">
              {errors.age}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label>Answers (1 = YES, 2 = NO)</Form.Label>
          <Form.Control
            isInvalid={Boolean(errors.answers)}
            name="answers"
            onChange={handleChange}
            type="text"
            value={values.answers}
          />
          {errors.answers && touched.answers && (
            <Form.Control.Feedback type="invalid">
              {errors.answers}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label>Confirm Answers</Form.Label>
          <Form.Control
            isInvalid={Boolean(errors.answersConfirm)}
            name="answersConfirm"
            onChange={handleChange}
            type="text"
            value={values.answersConfirm}
          />
          {errors.answersConfirm && touched.answersConfirm && (
            <Form.Control.Feedback type="invalid">
              {errors.answersConfirm}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group className="mt-2">
          <Button type="submit">Submit</Button>
        </Form.Group>
      </Form>
      {results.ageRange && (
        <Card body className="mt-4">
          <Row>
            <Col>Age Range: {results.ageRange}</Col>
          </Row>
          <Table>
            <thead>
              <tr>
                <th>Metric</th>
                <th>Score</th>
                <th>T-score</th>
                <th>Percentile</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>DEF</td>
                <td>{results.score.d}</td>
                <td>{results.ranks.d?.t}</td>
                <td>{results.ranks.d?.p}</td>
              </tr>
              <tr>
                <td>TOT</td>
                <td>{results.score.t}</td>
                <td>{results.ranks.t?.t}</td>
                <td>{results.ranks.t?.p}</td>
              </tr>
              <tr>
                <td>PHY</td>
                <td>{results.score.p}</td>
                <td>{results.ranks.p?.t}</td>
                <td>{results.ranks.p?.p}</td>
              </tr>
              <tr>
                <td>WOR</td>
                <td>{results.score.w}</td>
                <td>{results.ranks.w?.t}</td>
                <td>{results.ranks.w?.p}</td>
              </tr>
              <tr>
                <td>SOC</td>
                <td>{results.score.s}</td>
                <td>{results.ranks.s?.t}</td>
                <td>{results.ranks.s?.p}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>INC</td>
                <td
                  className={
                    results.indexScore >= 6 ? 'bg-danger' : 'bg-success'
                  }
                  colSpan="4"
                >
                  {results.indexScore}
                </td>
              </tr>
            </tfoot>
          </Table>
        </Card>
      )}
    </Layout>
  );
}
