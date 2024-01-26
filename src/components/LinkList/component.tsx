import { Link } from "../Link/component"
const data = ['Github', 'Blog', 'LinkedIn', 'Instagram', 'Portfolio']


export const LinkList = () => {
    return (
        <div>
        {data.map((title) => {
            return <Link title={title} />
        })}
    </div>
    )
}