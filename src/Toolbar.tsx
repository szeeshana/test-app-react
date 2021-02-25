/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import * as React from "react";

interface ToolBarProps {
    'type'?: 'H' | 'V'
}
class ToolBar extends React.Component<ToolBarProps, {}> {
    static defaultProps: ToolBarProps = {
        'type': 'H'
    }

    render() {
        let typeClass = this.props.type === 'H' ? 'ui-toolbar h' : 'ui-toolbar v';
        return (
            <div className={typeClass}>
                {this.props.children}
            </div>
        );
    }
}

export default ToolBar;