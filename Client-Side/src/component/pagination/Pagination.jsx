import React from 'react';
import './Pagination.scss';

const Pagination = ({ links, onPageChange }) => {
    return (
        <nav className="pagination">
            <ul>
                {links.map((link, index) => (
                    <li key={index} className={link.active ? 'active' : ''}>
                        {link.url ? (
                            <button onClick={() => onPageChange(link.url)} dangerouslySetInnerHTML={{ __html: link.label }} />
                        ) : (
                            <span dangerouslySetInnerHTML={{ __html: link.label }} />
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
