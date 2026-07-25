export interface WorkProps{
    id:string,
    illustration:string,
    title:string,
    tags:{
        id:number,
        text:string,
    }[],
    links:{
        detail:string,
        preview:string,
        isopensource:boolean,
        repogithub?:string
    }
}


export interface WorkfullProps extends WorkProps{
    images:string[],
    //other props
}

export type TestimonialProps = {
    id:number,
    image:string,
    by:string,
    role:string,
    description:string
}

export interface Blog{
    id:number,
    illustration:string,
    title:string,
    tags:{
        id:number,
        text:string,
    }[]
}