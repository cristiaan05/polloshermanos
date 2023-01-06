import { Sequelize, DataTypes } from "sequelize";
import db from "../db/index"


const Product = db.get().define('Product', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    schema: "PDBADMIN",
});

export default Product;