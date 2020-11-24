========
Tutorial
========

Package Helper helps you create, develop and maintain a package. If you use all the tools presented in this tutorial, things
will work this way:

* You create the file structure of your package in less than a minute with Cookiecutter_.

* You use the IDE PyCharm_. It is configured to:

    * Generate the documentation of your package locally,
    * Run the unit tests.

* Your project is on GitHub_. When you push modifications:

    * ReadTheDocs_ automatically generates the documentation and publishes it online.
    * Travis-CI_ automatically runs the unit tests on several versions of Python,
    * Codecov_ displays what parts of the package are covered by the unit tests.

* When you make a *release* on GitHub, Travis-CI automatically publishes your package on PyPI_. This way, any Python
  user can install it with ``pip install``.

* Pyup_ helps you keep your development requirements up to date, such as ``sphinx`` or ``pytest``.

.. _Cookiecutter: https://github.com/audreyr/cookiecutter
.. _PyCharm: https://www.jetbrains.com/pycharm
.. _GitHub: https://github.com
.. _ReadTheDocs: https://readthedocs.org
.. _Travis-CI: https://travis-ci.com
.. _PyPI: https://pypi.python.org/pypi
.. _Codecov: https://codecov.io
.. _Pyup: https://pyup.io

Tick the tools that you want to use:

.. raw:: html

    <form>
        <ul style="list-style-type:none">
            <li><input type="checkbox" checked onchange="switchVisibility(this, 'venv')"> Virtualenv: virtual
                environment. <em>Recommended especially if your use a third-party package that is still in a 0.x.x
                release (which means that its API is not considered stable yet).</em></li>
            <li><input type="checkbox" checked onchange="switchVisibility(this, 'github')"> Github: collaborative
                version control.
            <ul style="list-style-type:none">
                <li><input type="checkbox" checked onchange="switchVisibility(this, 'readthedocs')"> ReadTheDocs: put a
                    beautiful documentation of the package on the web.</li>
                <li><input type="checkbox" checked onchange="switchVisibility(this, 'travis')"> Travis-CI: run the unit
                    tests with different versions of Python.
                <ul style="list-style-type:none">
                    <li><input type="checkbox" checked onchange="switchVisibility(this, 'pypi')"> PyPI: make the package
                        installable with <code class="docutils literal notranslate"><span class="pre">pip</span>
                        <span class="pre">install</span></code>.</li>
                    <li><input type="checkbox" checked onchange="switchVisibility(this, 'codecov')"> Codecov: check if
                        the unit tests cover the whole package.</li>
                </ul>
                </li>
                <li><input type="checkbox" checked onchange="switchVisibility(this, 'pyup')"> Pyup: maintain the
                    development requirements up to date. <em>Recommended for large projects.</em></li>
            </ul>
            </li>
        </ul>

-------------------------------
Preliminaries: Once and for All
-------------------------------

.. raw:: html
   :file: _static/preliminaries.html

-------------------
Create Your package
-------------------

.. raw:: html
   :file: _static/create_your_package.html

---------------------------------
Develop and Maintain Your Package
---------------------------------

.. raw:: html
   :file: _static/during_the_life_of_your_package.html
