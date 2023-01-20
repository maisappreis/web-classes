import Titulo from "./Titulo";

// Nessa 'interface' eu digo quais propriedade eu espero receber de Layout. Isso é TypeScript.
// Isso faz com que eu exiga que Layout sempre tenha 'titulo' e 'children'.

interface LayoutProps {
    titulo: string
    children: any
}

export default function Layout(props: LayoutProps) {
    return (
        <div className="flex flex-col w-2/3 bg-white text-gray-800 rounded-md">

            <Titulo>{props.titulo}</Titulo>

            <div className="p-6">
                {props.children}
            </div>
            
        </div>
    )
}