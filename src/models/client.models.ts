import {Table, Model, Column, DataType} from "sequelize-typescript";

@Table({
    timestamps: false,
    tableName: "clients"
})

export class Client extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name!:string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    lastName!:string

}