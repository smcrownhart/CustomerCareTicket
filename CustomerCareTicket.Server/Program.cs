using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using CustomerCareTicket.Server.Data;
using CustomerCareTicket.Server.Areas.Identity.Data;
using CustomerCareTicket.Server.SeedData;
var builder = WebApplication.CreateBuilder(args);
var connectionString = builder.Configuration.GetConnectionString("CustomerCareTicketServerContextConnection") ?? throw new InvalidOperationException("Connection string 'CustomerCareTicketServerContextConnection' not found.");

builder.Services.AddDbContext<CustomerCareTicketServerContext>(options => options.UseSqlServer(connectionString));

builder.Services.AddDefaultIdentity<CustomerCareTicketServerUser>(options => options.SignIn.RequireConfirmedAccount = true).AddEntityFrameworkStores<CustomerCareTicketServerContext>();

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
SeedData testData = new SeedData();
var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();
app.MapRazorPages();
app.MapFallbackToFile("/index.html");

app.Run();
