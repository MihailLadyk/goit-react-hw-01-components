import React from "react";
import styles from './TransactionHistory.module.css' 


function TransactionHistory({ items }) {
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          <th className={styles.theader}>Type</th>
          <th className={styles.theader}>Amount</th>
          <th className={styles.theader}>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.tbody}>
        {items.map((Transactioninfo) => (
          <tr key={Transactioninfo.id}>
            <td className={styles.tbodyelem}>{Transactioninfo.type}</td>
            <td className={styles.tbodyelem} >{Transactioninfo.amount}</td>
            <td className={styles.tbodyelem}>{Transactioninfo.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionHistory;
