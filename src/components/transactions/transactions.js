import React, { useEffect, useState } from "react";
import Card from "../Card";
import '../../App.css'
import axios from 'axios';

const AccountManagement = () =>{
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = 'https://mocki.io/v1/896cde45-5e61-4a54-b084-323c9c385d7b';
    axios.get(apiUrl)
      .then((response) => {
        setUserData(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []); // Run on component mount

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="accounts-page">
      {/* Account Cards */}
      <div className="accounts">
        {userData.accounts.map(account => (
          <Card key={account.account_id} title={account.account_type}>
            <p>Balance: {account.balance}</p>
            <h5>Transactions:</h5>
            <ul>
              {account.transactions.map(transaction => (
                <li key={transaction.transaction_id}>
                  {transaction.description} - ${transaction.amount} on {transaction.date}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      {/* Credit Card Cards */}
      <div className="credit-cards">
        {userData.credit_cards.map(card => (
          <Card key={card.id} title={card.name}>
            <p>Limit: {card.credit_limit}</p>
            <p>Balance: {card.current_balance}</p>
            <p>Expiration Date: {card.expiration_date}</p>
            <h5>Transactions:</h5>
            <ul>
              {card.transactions.map(transaction => (
                <li key={transaction.transaction_id}>
                  {transaction.description} - ${transaction.amount} on {transaction.date}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
    );
}

export default AccountManagement;