package net.hydra2s.crop.code;

import net.fabricmc.fabric.api.resource.IdentifiableResourceReloadListener;
import net.fabricmc.fabric.api.resource.ResourceManagerHelper;
import net.fabricmc.fabric.api.resource.ResourcePackActivationType;
import net.fabricmc.fabric.api.resource.SimpleSynchronousResourceReloadListener;
import net.fabricmc.loader.api.FabricLoader;
import net.fabricmc.loader.api.ModContainer;
import net.fabricmc.loader.api.metadata.ModMetadata;
import net.fabricmc.loader.api.metadata.ModOrigin;
import net.fabricmc.loader.impl.ModContainerImpl;
import net.fabricmc.loader.impl.discovery.ModCandidate;
import net.hydra2s.crop.generated.Modules;
import net.minecraft.resource.ResourceManager;
import net.minecraft.resource.ResourceType;
import net.minecraft.util.Identifier;
import net.minecraft.util.profiler.Profiler;

import java.io.InputStream;
import java.nio.file.Path;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.Executor;
import java.util.stream.Stream;

public class DataPacks {
    public DataPacks () {
        var container = FabricLoader.getInstance().getModContainer("crop").get();
        Arrays.stream(Modules.moduleNames).forEachOrdered((m)->{
            var identifier = new Identifier("crop", "crop/data/crop/datapacks/" + m);
            ResourceManagerHelper.registerBuiltinResourcePack(identifier, container, ResourcePackActivationType.NORMAL);
        });
    }
}
