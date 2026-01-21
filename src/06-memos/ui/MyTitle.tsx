import { memo, type FC } from "react";

interface Props {
    title: string;
}

export const MyTitle: FC<Props> = memo(({ title }) => {
    console.log('My title Re-Render!');
    return (
        <div className="text-3xl">{title}</div>
    )
})
