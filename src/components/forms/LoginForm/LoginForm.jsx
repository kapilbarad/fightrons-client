import React from 'react'

import { Form, CenteredMainButton, IconFormControl } from 'libs/style-library/forms'
import { email, lockOpen } from 'libs/style-library/icons'

const LoginForm = props => {
    return (
        <Form>
            <IconFormControl type="text" name="email" label="Email" icon={email} />
            <IconFormControl type="password" name="password" label="Password" icon={lockOpen} />
            <CenteredMainButton label="Login" />
        </Form>
    )
}

export default LoginForm