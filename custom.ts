enum Direction {
    Forward,
    Back,
    Left,
    Right
}

//%  block="My Project" weight=200 color=#0000FF icon="\uf0da"
namespace custom {

    //% block="agent move %move_direction %move_blocks blocks then replace %replace_direction with %block"
    //% inlineInputMode=inline
    //% block.fieldEditor="gridpicker"
    //% block.fieldOptions.width=340 
    //% block.fieldOptions.columns=8 
    //% block.fieldOptions.maxRows="8"
    //% block.fieldOptions.hasSearchBar=true
    export function agent_move_replace(move_direction: Direction, move_blocks: number, replace_direction: Direction, block: Block): void {
        agent.move(move_direction, move_blocks)
        agent.destroy(replace_direction)
        agent.setItem(block, 1, 1)
        agent.setSlot(1)
        agent.place(replace_direction)
    }

}