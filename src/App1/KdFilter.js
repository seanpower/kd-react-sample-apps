import React, { Component } from 'react';
import { KdSelectEntity} from 'react-kd.ui';

class KdFilter extends Component {

    componentDidMount() {
        console.log("mounted");
    }

    componentWillUnmount() {
        console.log("un mounted");
    }

    localOnChange = this.props.onChange;

    render()
        {
            return (
                <KdSelectEntity
                    theme={this.props.kdFilterOptions.theme}
                    selectBehavior={this.props.kdFilterOptions.selectBehavior}
                    isDisabled={this.props.kdFilterOptions.isDisabled}
                    chicklets={this.props.kdFilterOptions.chicklets}
                    //events={{onChange: this.props.onChange}}
                    events={{onChange: this.localOnChange}}
                    autoComplete={this.props.kdFilterOptions.autoComplete}
                    api={this.props.kdFilterOptions.api}
                    mainSelector={this.props.kdFilterOptions.mainSelector}
                    kdFilterModel={this.props.kdFilterItem}

                />
            );
        }

}

export default KdFilter;