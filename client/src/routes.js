import Home from './components/Home.vue';
import SignUp from './components/SignUp.vue';
import SignIn from './components/SignIn.vue';
import AddNotes from './components/notes/AddNotes.vue';
import ShowNotes from './components/notes/ShowNotes.vue';
import EditNotes from './components/notes/EditNotes.vue';
import Category from './components/category/Category.vue';
import CategoryList from './components/category/CategoryList.vue';
import NotesListOfCategory from './components/category/NotesListOfCategory.vue';
import Contact from './components/contacts/Contact.vue';
import ContactsLists from './components/contacts/ContactsLists.vue';

const routes = [
    {path: '/SignUp', component: SignUp},
    {path: '/', name: 'Home', component: Home},
    {path: '/SignIn', name: 'SignIn', component: SignIn},
    {path: '/AddNotes',name: 'AddNotes', component: AddNotes},
    {path: '/Notes',name: 'Notes', component: ShowNotes},
    {path: '/EditNote/:id', name: 'EditNote', component: EditNotes},
    {path: '/AddCategory', name: 'Category', component: Category},
    {path: '/CategoryList', name: 'CategoryList', component: CategoryList},
    {path: '/NotesListOfCategory/:id', name: 'NotesListOfCategory', component: NotesListOfCategory},
    {path: '/Contact', name: 'Contact', component: Contact},
    {path: '/Admin/ContactsLists', name: 'ContactsLists', component: ContactsLists}
]

export default routes;
