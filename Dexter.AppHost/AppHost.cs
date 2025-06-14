var builder = DistributedApplication.CreateBuilder(args);

var dexterApi = builder.AddProject<Projects.Dexter_Web>("dexter-web")
    .WithExternalHttpEndpoints();

builder.AddNpmApp("dexter-client", "../Dexter.Client", scriptName: "dev")
    .WithReference(dexterApi)
    .WaitFor(dexterApi)
    .WithEnvironment("BROWSER", "none")
    .WithHttpEndpoint(env: "PORT")
    .WithExternalHttpEndpoints(); 

builder.Build().Run();
