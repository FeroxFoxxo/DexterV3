var builder = DistributedApplication.CreateBuilder(args);

var dexterApi = builder.AddProject<Projects.Dexter_Server>("dexter-server")
    .WithExternalHttpEndpoints();

builder.AddNpmApp("dexter-client", "../Dexter.Client", scriptName: "dev")
    .WithReference(dexterApi)
    .WaitFor(dexterApi)
    .WithHttpEndpoint(env: "PORT")
    .WithExternalHttpEndpoints()
    .PublishAsDockerFile();

builder.Build().Run();
