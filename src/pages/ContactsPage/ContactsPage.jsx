import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getLoggedin } from 'redux/slice/AuthSlise';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
import { Heading, Box } from '@chakra-ui/react';

const ContactsView = () => {
    const isLogdedin = useSelector(getLoggedin);
    return (
        <Box w="400px" mx="auto" my="6">
            {!isLogdedin && <Navigate to="/" replace={true} />}
            <Heading mb={5}>Phonebook</Heading>
            <ContactForm />
            <Heading mb={5}>Contacts</Heading>
            <Filter />
            <ContactList />
        </Box>
    );
};

export default ContactsView;