class RecipeComponent extends React.Component {
    render() {
        const recipeName = "Голубцы";
        const ingredients = [
            { name: "Капуста", amount: "1 большой кочан" },
            { name: "Фарш (свиной или говяжий)", amount: "500 г" },
            { name: "Рис", amount: "100 г" },
            { name: "Лук", amount: "1 штука" },
            { name: "Морковь", amount: "1 штука" },
            { name: "Томатная паста", amount: "3 ст. ложки" },
            { name: "Соль", amount: "по вкусу" },
            { name: "Перец", amount: "по вкусу" },
            { name: "Сметана", amount: "по вкусу" }
        ];

        const steps = [
            "Отделите листья капусты и обдайте их кипятком, чтобы они стали мягкими.",
            "Смешайте фарш, вареный рис, мелко нарезанный лук и натертую морковь, добавьте соль и перец.",
            "Заверните начинку в капустные листья, формируя голубцы.",
            "На разогретую сковороду добавьте немного масла, обжарьте голубцы с обеих сторон до золотистой корочки.",
            "Выложите голубцы в кастрюлю, добавьте томатную пасту, немного воды и тушите на медленном огне около 30-40 минут.",
            "Подавайте с сметаной."
        ];

        return (
            <div className="recipe">
                <h1>{recipeName}</h1>
                <img src="images/golubtsy.jpg" alt="Голубцы" style={{ maxWidth: "300px" }} />
                
                <h2>Ингредиенты:</h2>
                <ul>
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>{`${ingredient.name}: ${ingredient.amount}`}</li>
                    ))}
                </ul>

                <h2>Последовательность приготовления:</h2>
                <ol>
                    {steps.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ol>
            </div>
        );
    }
}
