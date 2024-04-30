import { useMemo, useState } from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactSelect from "react-select";
import { Note, Tag } from "./App";
import NoteCard from "./NoteCard";

type NoteListProps = {
  availableTags: Tag[];
  notes: Note[];
};

function NoteList({ availableTags, notes }: NoteListProps) {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [title, setTitle] = useState<string>("");

  const filteredNotes = useMemo(() => {
    return notes.filter(
      (note) =>
        (title === "" ||
          note.title.toLowerCase().includes(title.toLowerCase())) &&
        (selectedTags.length === 0 ||
          selectedTags.every((tag) =>
            note.tags.some((noteTag) => noteTag.id === tag.id)
          ))
    );
  }, [notes, selectedTags, title]);

  return (
    <>
      <Row className="align-items-center mb-4">
        <Col>
          <h1>Notes</h1>
        </Col>
        <Col xs="auto">
          <Stack direction="horizontal" gap={2}>
            <Link to="/new">
              <Button variant="primary">Create</Button>
            </Link>
            <Button variant="outline-secondary">Edit Tags</Button>
          </Stack>
        </Col>
      </Row>
      <Form>
        <Row className="mb-4">
          <Col>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Tags</Form.Label>
              <ReactSelect
                value={selectedTags.map((tag) => {
                  return { label: tag.label, value: tag.id };
                })}
                options={availableTags.map((tag) => ({
                  label: tag.label,
                  value: tag.id,
                }))}
                onChange={(tags) =>
                  setSelectedTags(
                    tags.map((tag) => ({ label: tag.label, id: tag.value }))
                  )
                }
                isMulti
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {filteredNotes.map((note) => (
          <Col key={note.id}>
            <NoteCard id={note.id} title={note.title} tags={note.tags} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default NoteList;