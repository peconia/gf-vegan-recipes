'use client';

import Link from 'next/link';
import { ComponentProps, MouseEvent } from 'react';

type Direction = 'forward' | 'backward';

type Props = ComponentProps<typeof Link> & {
    direction: Direction;
};

export function TransitionLink({ direction, onClick, ...props }: Props) {
    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        document.documentElement.dataset.navDirection = direction;
        if (direction === 'backward') {
            window.scrollTo({ top: 0, behavior: 'instant' });
        }
        onClick?.(e);
    };

    return <Link {...props} onClick={handleClick} />;
}
