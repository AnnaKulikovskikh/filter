
export default function Toolbar(props) {
    const menu = props.filtres.map((filter, index) => {
        return (
            <li key={index} 
                className={filter===props.selected ? "menu-active" : "li"}
                onClick={() => props.onSelectFilter(filter)} >
                {filter}
            </li>
        )
    })

    return (
        <ul className='menu'>
            {menu}
        </ul>
    )
}