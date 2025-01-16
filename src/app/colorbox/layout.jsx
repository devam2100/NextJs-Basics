export default function ColourboxLayout({children,left,right}){
    const isSliderbar =false
    return(
        <section>
            {children }
            {/* {left}
            {right} */}
            {
                isSliderbar ? left :right
            }
        </section>
    )
}