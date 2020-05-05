import Nav from "react-bootstrap/Nav";
import React from "react";

export default function Navigation() {
    return (
        <div>
            <Nav
                activeKey="/home"
                onSelect={() => alert(`selected `)}
            >
                <Nav.Item>
                    <Nav.Link href="/home">Receipts</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Mealplans</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Foods</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}