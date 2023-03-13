import { ChevronRightIcon } from '@heroicons/react/20/solid';
import React from 'react'
import { Link, useParams } from 'react-router-dom'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
export default function Breadcrumbs({ breadcrumbs,className }) {
    // const { cat } = useParams();
    return (
        <nav aria-label="Breadcrumbs" className={classNames(
            "order-first flex space-x-2 text-sm font-semibold items-center capitalize",className
        )}>
            {breadcrumbs.map((item, index, breadcrumbs) =>
                <>
                    {index === 0 ? "" :
                        <ChevronRightIcon className='w-4 h-4 select-none text-slate-500'/>
                    }
                    {index + 1 === breadcrumbs.length ? (
                        <span key={index} className={'text-slate-600 hover:text-slate-600'}>{item.name}</span>
                    ) : (
                        <Link key={index} to={item.href} className={'text-slate-500 hover:text-slate-600'}>{item.name}</Link>
                    )}
                </>
            )}
        </nav>
    )
}
