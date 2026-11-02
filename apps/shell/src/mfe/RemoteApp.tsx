import type { ProjectManifest } from "@portfolio/mfe-contract";
import { Suspense, use, useState } from "react";
import { useTheme } from "../lib/theme";
import { ErrorBoundary } from "./ErrorBoundary";
import { forgetMicroFrontend, loadMicroFrontend } from "./loadRemote";

interface Props {
  remote: NonNullable<ProjectManifest["remote"]>;
  basePath: string;
}

export function RemoteApp({ remote, basePath }: Props) {
  const [attempt, setAttempt] = useState(0);

  return (
    <ErrorBoundary
      key={attempt}
      fallback={(error) => (
        <RemoteError
          error={error}
          onRetry={() => {
            forgetMicroFrontend(remote);
            setAttempt((n) => n + 1);
          }}
        />
      )}
    >
      <Suspense fallback={<RemoteSkeleton />}>
        <RemoteMount remote={remote} basePath={basePath} />
      </Suspense>
    </ErrorBoundary>
  );
}

function RemoteMount({ remote, basePath }: Props) {
  const { theme } = useTheme();
  const { default: App } = use(loadMicroFrontend(remote));
  return <App basePath={basePath} theme={theme} />;
}

function RemoteSkeleton() {
  return (
    <div className="grid gap-4" aria-busy="true" aria-label="Loading project">
      <div className="h-8 w-1/3 animate-pulse rounded-lg bg-surface-2" />
      <div className="h-64 animate-pulse rounded-2xl bg-surface-2" />
    </div>
  );
}

function RemoteError({ error, onRetry }: { error: Error; onRetry: () => void }) {
  return (
    <div className="rounded-2xl border border-danger/30 bg-danger/5 p-6">
      <h2 className="font-semibold text-danger">This project failed to load</h2>
      <p className="mt-1 text-sm text-muted">
        The remote may be offline. Start it with <code className="font-mono">pnpm dev:all</code>.
      </p>
      <pre className="mt-3 overflow-x-auto text-xs text-muted">{error.message}</pre>
      <button
        onClick={onRetry}
        className="mt-4 rounded-lg bg-fg px-4 py-2 text-sm font-medium text-bg transition hover:opacity-90"
      >
        Retry
      </button>
    </div>
  );
}
