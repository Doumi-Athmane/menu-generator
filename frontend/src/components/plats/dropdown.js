import React from 'react'
import {Dropdown, useDropdownToggle, useDropdownMenu} from 'react-overlays'
import Arrow from '../../assets/arrow-down-sign.svg'
import './dropdown.css'

function DropdownButton({
        show,
        onToggle,
        drop,
        alignEnd,
        role,
        children
}) {

    const Menu = ({ role, children }) => {
        const { show, _onClose, props } = useDropdownMenu({
            flip: true,
            offset: [0, 8],
        });
        return (
            <div {...props} role={role} show={show}>
                {children}
            </div>
        );
    };
      
    const Toggle = ({ id, children }) => {
        const [props, { _show, toggle }] = useDropdownToggle();
        return (
            <button
                type="button"
                className="btn"
                id={id}
                {...props}
                onClick={toggle}
            >
                {children}
            </button>
        );
    };

    return (
        <Dropdown
            show={show}
            onToggle={onToggle}
            drop={drop}
            alignEnd={alignEnd}
        >
            {
                ({ props }) => (
                    <span {...props} className="toggle">
                        <Toggle id="toggle"><img src={Arrow} alt="filter" /></Toggle>
                        <Menu role={role}>{children}</Menu>
                    </span>
                )
            }
        </Dropdown>
    )
}

export default DropdownButton;