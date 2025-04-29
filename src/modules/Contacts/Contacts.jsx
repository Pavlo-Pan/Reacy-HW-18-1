import { styles } from './styles.js';
import ContactsHead from './ContactsHead/ContactsHead.jsx';
import ContactsForm from './ContactsForm/ContactsForm.jsx';
import ContactsSocialLinks from './ContactsSocialLinks/ContactsSocialLinks.jsx';
import Container from '../layouts/Container/Container.jsx';
import SectionTitle from '../../shared/components/SectionTitle/SectionTitle.jsx';
const Contacts = () => {
    return (
        <>
            <Container>
            <SectionTitle title="Контакты"/>
                <ContactsHead />
                <div style={styles.formAndSocialContainer}>
                    <ContactsForm />
                    <ContactsSocialLinks />
                </div>
            </Container>
        </>
    );
};

export default Contacts;