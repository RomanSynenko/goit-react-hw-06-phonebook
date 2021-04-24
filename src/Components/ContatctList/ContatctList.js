import React from 'react';
import s from './List.module.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import action from '../../redux/action';



const ContactListItem = ({ id, name, phone, onRemove }) => {
    return (
        <li className={s.contact_item}>
            <p className={s.contact_name}>{name} </p> :
            <p>{phone}</p>
            <button className={s.delete_button}
                onClick={() => onRemove(id)}>Delete</button>
        </li>
    )
};
const ContactList = ({ contacts, deleteContact }) => {
    if (contacts.length === 0) return null
    return (
        <ul className={s.contact_list}>
            {
                contacts.map((contact) => <ContactListItem key={contact.id} {...contact} onRemove={deleteContact} />
                )
            }
        </ul>
    )
};


const visibleContacts = (allContacts, filter) => {
    const normolizedFilter = filter.toLowerCase();

    return allContacts.filter(contact =>
        contact.name.toLowerCase().includes(normolizedFilter),
    );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
    contacts: visibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
    deleteContact: id => dispatch(action.deleteContact(id)),
});


ContactListItem.propTypes = {
    contacts: PropTypes.array.isRequired,
    onRemove: PropTypes.func.isRequired,
};
ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    onRemove: PropTypes.func.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(ContactList);