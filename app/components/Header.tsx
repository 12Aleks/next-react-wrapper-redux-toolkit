import React, { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import { public_rout, auth_rout } from '../routs/path'

interface IHeader {
    user: boolean
}

const Header: FC<IHeader> = ({user}) => {
     const [status, setStatus] = useState<boolean>(true)

    useEffect(() => {
        setStatus(user)

    }, [user])

    return (
        <div>
            <ul>
                {
                    public_rout.map(page =>
                        <li style={{ display: 'inline-block', padding: '10px 20px' }}>
                            <Link href={page.path} key={page.name}>
                                <a>{page.name}</a>
                            </Link>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default Header