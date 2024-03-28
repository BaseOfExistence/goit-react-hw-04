import css from "./TransactionHistory.module.css"
export default function TransactionHistory({ items }) {
    return (
        <table className={css.container}>
            <thead>
                <tr>
                    <th className={css.title}>Type</th>
                    <th className={css.title}>Amount</th>
                    <th className={css.title}>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => {
                    const { id, type, amount, currency } = item
                    return (
                        <tr className={css.tableItem} key={id}>
                            <td className={css.item}>{type}</td>
                            <td className={css.item}>{amount}</td>
                            <td className={css.item}>{currency}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}