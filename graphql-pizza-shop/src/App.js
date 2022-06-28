import React from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import styles from './App.module.css';

function App() {
    return (
        <div className={styles.app__wrapper}>
            <div className={styles.app}>
                <Header />
                <Main />
            </div>
        </div>
    );
}

export default App;
