import React from 'react'
import styles from '../../styles/navbar.module.css'
import CompanyLogo from '../company/CompanyLogo';

function NavBar () {
    return (
        <div className={styles.navbar}>
            <div>
                <CompanyLogo 
                    imageUrl= "https://camo.githubusercontent.com/1c94b38e955ab102dede85a82e317a3c8b94369c562d559d4663ab030fa5d983/687474703a2f2f7069676d656e742e6769746875622e696f2f66616b652d6c6f676f732f6c6f676f732f766563746f722f636f6c6f722f677265656e732d666f6f642d737570706c696572732e737667"
                />
            </div>
            <div className={styles.navTabsContainer}>
                <div>
                    Home
                </div>
                <div>
                    Transactions
                </div>
            </div>
        </div>
    )
}

export default NavBar;