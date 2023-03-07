using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace kimshopAPI.Migrations
{
    /// <inheritdoc />
    public partial class InitialSeedMenuItem : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "MenuItems",
                columns: new[] { "Id", "Category", "Description", "Image", "Name", "Price", "SpecialTag" },
                values: new object[,]
                {
                    { 1, "Main", "good", "https://kimimage.blob.core.windows.net/kimfood/anh-nguyen-kcA-c3f_3FE-unsplash.jpg", "steak", 50.990000000000002, "" },
                    { 2, "Main", "good11", "https://kimimage.blob.core.windows.net/kimfood/anh-nguyen-kcA-c3f_3FE-unsplash.jpg", "roll", 20.989999999999998, "" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "MenuItems",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "MenuItems",
                keyColumn: "Id",
                keyValue: 2);
        }
    }
}
