export default function EjemploLlaves () {
    const sumar = (a:number, b:number):number => {
        return a + b;
    }
    const sum:number = sumar(3,4);
    const message:string = "Hey Jude";
    return <section>
        <h1> {message} </h1>
        <p> 3 + 4 = {sum} </p>
    </section>
}
