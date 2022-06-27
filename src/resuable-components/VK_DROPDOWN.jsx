import React from 'react';
import { Form, Dropdown } from 'semantic-ui-react';

export const VK_DROPDOWN = (props) => {
    const {
        errors,
        touched,
        name,
        onBlur,
        onChange,
        label,
        required = false,
        disabled = false,
        defaultValue = '',
        width = 16,
        options = [],
        styles = {},
        id = '',
        search = false,
        multiple = false,
        noResultsMessage = 'Selection Empty',
        placeholder = '',
        className = '',
        loading = false,
        rest,
    } = props;

    return(
        <Form.Field width={width} required={required} >
        <label>{label}</label>
        <Dropdown
            className={className}
            defaultValue={defaultValue}
            floating
            name={name}
            fluid
            id={id}
            search={search}
            options={options}
            selection
            multiple={multiple}
            noResultsMessage={noResultsMessage}
            placeholder={placeholder}
            onBlur={onBlur}
            onChange={onChange}
            disabled={disabled}
            loading={loading}
            {...rest}
        />
        </Form.Field>
    )
}