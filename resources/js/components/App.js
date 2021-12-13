import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import AllContacts from './AllContacts';
import AddContact from './AddContact';
import EditContact from './EditContact';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header></Header>
                <Routes>
                    <Route path="/" element={<AllContacts />} />
                    <Route path="/add-contact" element={<AddContact />} />
                    <Route path="/edit-contact/:id" element={<EditContact />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
