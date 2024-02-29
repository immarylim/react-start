import './TabButton.css';

export default function TabButton({children, onSelect, isSelected}) {
    return (
        <li>
            <button className={isSelected ? 'tab-btn active' : 'tab-btn'} onClick={onSelect}>{children}</button>
        </li>
    );
}