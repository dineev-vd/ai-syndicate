import { PropsWithChildren } from 'react';
import './Table.scss';

const Table: React.FC<PropsWithChildren> = ({children}) => {
    return <table className='ui-table'>
        {children}
    </table>
}

export default Table;