import './styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import UserList from './components/UserList';

function App() {

    return (

        <div>

            <Header></Header>

            <main className='main'>
                <UserList></UserList>
            </main>

            <Footer></Footer>

        </div>
    );
};

export default App;
