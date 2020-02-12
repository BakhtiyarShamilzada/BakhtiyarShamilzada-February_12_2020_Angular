export class Model
{
    user;
    items;

    constructor ()
    {
        this.user = "Bakhtiyar";
        this.items = [

            new TodoItem("Sport", true),
            new TodoItem("Breakfast", true),
            new TodoItem("Learn Angular", false)

          ]
    }
}

export class TodoItem
{
    description;
    action;

    constructor(desciption, action)
    {
        this.description = desciption;
        this.action = action;
    }
}