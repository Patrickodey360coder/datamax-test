import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


function Forms() {
  return (
    <>
      <Form>
        <h1 className="text-center my-4">Update Book</h1>
        <Form.Group className="mb-3">
          <Form.Label>Book title</Form.Label>
          <Form.Control type="text" placeholder="Enter book title" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Authors</Form.Label>
          <Form.Control type="text" placeholder="Enter authors" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Publishers</Form.Label>
          <Form.Control type="text" placeholder="Enter publishers" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Country</Form.Label>
          <Form.Control type="text" placeholder="Enter country" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Pages</Form.Label>
          <Form.Control type="text" placeholder="Enter pages" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Isbn</Form.Label>
          <Form.Control type="text" placeholder="Enter isbn" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
        </Form.Group>
        <Button variant="primary" type="submit">
          Update
        </Button> 
      </Form>
    </>
  )
}

export default Forms;
