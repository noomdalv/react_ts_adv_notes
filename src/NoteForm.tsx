import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import CreatableSelect from "react-select/creatable";

export default function NoteForm() {
  return (
    <Form>
      <Stack gap={4}>
        <Row>
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control required />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="tags">
              <Form.Label>Tags</Form.Label>
              <CreatableSelect isMulti />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="markdown">
          <Form.Label>Body</Form.Label>
          <Form.Control as="textarea" required rows={15} />
        </Form.Group>

        <Stack direction="horizontal" gap={2} className="justify-content-end">
          <Button variant="primary" type="submit">
            Save
          </Button>
          <Button variant="outline-secondary" type="button">
            Cancel
          </Button>
        </Stack>
      </Stack>
    </Form>
  );
}
