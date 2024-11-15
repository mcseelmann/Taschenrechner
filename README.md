# Taschenrechner

## Übungsprojekt für die Arbeit mit Git

## Installationsanleitung

1. Installation des [pre-commit-Frameworks](http://pre-commit.com).

   ```
   py -m venv git_env
   cd git_env
   Scripts\activate
   (git_env) python -m pip install pre-commit
   ```

2. pre-commit im Taschenrechner-Projekt aktivieren

   Sofern noch nicht geschehen, muss `pre-commit im Pfad verfügbar sein:
   ```
   cd git_env
   Scripts\activate
   (git_env)
   ```

   Anschließend könnt ihr in das Taschenrechner-Projekt wechseln und das pre-commit Framework aktivieren:

   ```
   (git_env) cd Taschenrechner
   (git_env) pre-commit install
   ```

3. Bei der weiteren Entwicklung müsst ihr dann nur noch `git_env` aktivieren:

   ```
   cd git_env
   Scripts\activate
   (git_env)
   ```

4. Zusätzlich zur lokalen Überprüfung der Dateien laufen auch auf dem GitHub-Server dieselben überprüfungen in einer [GitHub-Action](https://github.com/mcseelmann/Taschenrechner/actions).
