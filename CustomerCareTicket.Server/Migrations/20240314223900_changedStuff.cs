using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CustomerCareTicket.Server.Migrations
{
    /// <inheritdoc />
    public partial class changedStuff : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tickets_AspNetUsers_UserId",
                table: "Tickets");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "Tickets",
                newName: "CustomerCareTicketServerUserId");

            migrationBuilder.RenameIndex(
                name: "IX_Tickets_UserId",
                table: "Tickets",
                newName: "IX_Tickets_CustomerCareTicketServerUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Tickets_AspNetUsers_CustomerCareTicketServerUserId",
                table: "Tickets",
                column: "CustomerCareTicketServerUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tickets_AspNetUsers_CustomerCareTicketServerUserId",
                table: "Tickets");

            migrationBuilder.RenameColumn(
                name: "CustomerCareTicketServerUserId",
                table: "Tickets",
                newName: "UserId");

            migrationBuilder.RenameIndex(
                name: "IX_Tickets_CustomerCareTicketServerUserId",
                table: "Tickets",
                newName: "IX_Tickets_UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Tickets_AspNetUsers_UserId",
                table: "Tickets",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }
    }
}
