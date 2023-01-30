import TodosList from "./TodosList";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="flex">
            <div>
                {/* @ts-ignore */}
                {/* <TodosList /> */}
            </div>

            <div className="flex-1">{children}</div>
        </main>
    )
}