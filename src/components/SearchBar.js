import React from "react";
import { useState } from "react";
import { Form, Button } from 'react-bootstrap';

const SearchBar = ({ onFilter }) => {
    const [query, setQuery] = useState("");

    const handleFilter = (e) => {
        e.preventDefault();
        onFilter(query);
    };

    return (
        <Form onSubmit={handleFilter} className="d-flex align-items-center">
            <Form.Control
                type="text"
                placeholder="Search..."
                className="rounded-0 border-none form-control-sm"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <Button type="submit" className="bg-white text-black rounded-0 btn-sm border-none">Search</Button>
        </Form>
    )
}

export default SearchBar;
