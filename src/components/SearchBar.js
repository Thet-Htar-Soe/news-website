import React from "react";
import { useState } from "react";
import { Form, Button } from 'react-bootstrap';

const SearchBar = ({ onFilter }) => {
    const [query, setQuery] = useState("");

    const handleFilter = (e) => {
        e.preventDefault();
        if (!query.trim()) {
            alert("Please enter a search query");
            return;
        }
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
            <Button type="submit" className="text-white rounded-0 btn-sm custom-search-btn">Search</Button>
        </Form>
    )
}

export default SearchBar;
