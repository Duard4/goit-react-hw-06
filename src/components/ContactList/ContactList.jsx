import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";

const getVisibleContacts = (contacts, nameFilter) => {
	return contacts.filter((contact) =>
		contact.name.toLowerCase().includes(nameFilter.toLowerCase())
	);
};

const ContactList = ({ onDelete }) => {
	const contacts = useSelector((state) => state.contacts.items);
	const statusFilter = useSelector((state) => state.filters.name);
	const visibleContacts = getVisibleContacts(contacts, statusFilter);

	return (
		<ul className={css.contacList}>
			{visibleContacts.map((contact) => (
				<li key={contact.id}>
					<Contact contact={contact} onDelete={onDelete}></Contact>
				</li>
			))}
		</ul>
	);
};

export default ContactList;
